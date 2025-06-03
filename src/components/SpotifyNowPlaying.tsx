// Spotify integration commented out.
// You can uncomment the code above if you wish to re-enable it.

import { useEffect, useState } from 'react';

interface Track {
    name: string;
    artist: string;
    albumArt: string;
    isPlaying: boolean;
    duration_ms: number;
    progress_ms: number;
}

const SpotifyNowPlaying = () => {
    const [track, setTrack] = useState<Track | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [elapsedTime, setElapsedTime] = useState(0);

    const accessToken = import.meta.env.VITE_SPOTIFY_ACCESS_TOKEN;

    const formatTime = (ms: number): string => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    useEffect(() => {
        if (!accessToken) {
            setError('Spotify access token not found in environment variables.');
            setIsLoading(false);
            return;
        }

        const fetchCurrentTrack = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });

                if (response.status === 204) {
                    // No track currently playing
                    setTrack(null);
                    setError(null);
                    setElapsedTime(0);
                } else if (response.ok) {
                    const data = await response.json();
                    if (data && data.item) {
                        setTrack({
                            name: data.item.name,
                            artist: data.item.artists.map((artist: any) => artist.name).join(', '),
                            albumArt: data.item.album.images[0]?.url || '',
                            isPlaying: data.is_playing,
                            duration_ms: data.item.duration_ms,
                            progress_ms: data.progress_ms,
                        });
                        setElapsedTime(data.progress_ms);
                        setError(null);
                    } else {
                         // Handle cases where data is returned but no item is playing (e.g., paused, but no track object)
                         setTrack(null);
                         setError(null); // Or set a specific "paused" state message if needed
                         setElapsedTime(0);
                    }
                } else {
                    const errorData = await response.json();
                    console.error('Spotify API error:', errorData);
                    setError(`Spotify API error: ${errorData.error.message || response.statusText}. Ensure your access token is valid and has the 'user-read-playback-state' scope.`);
                    setTrack(null);
                    setElapsedTime(0);
                }
            } catch (err: any) {
                console.error('Fetch error:', err);
                setError(`Failed to fetch Spotify data: ${err.message}`);
                setTrack(null);
                setElapsedTime(0);
            } finally {
                 setIsLoading(false);
            }
        };

        // Fetch initially
        fetchCurrentTrack();

        // Set up interval to fetch periodically (e.g., every 5 seconds)
        const fetchIntervalId = setInterval(fetchCurrentTrack, 5000);

        // Clean up interval on component unmount
        return () => clearInterval(fetchIntervalId);

    }, [accessToken]); // Re-run effect if access token changes

    useEffect(() => {
        let timerId: number | null = null;
        if (track && track.isPlaying) {
            timerId = window.setInterval(() => {
                setElapsedTime(prevTime => prevTime + 1000);
            }, 1000);
        }

        return () => {
            if (timerId !== null) {
                clearInterval(timerId);
            }
        };
    }, [track]);

    if (isLoading) {
        return (
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-md mb-6 w-72 relative">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-gray-800 animate-pulse"></div>
                    <div className="flex-1">
                        <div className="h-4 bg-gray-800 rounded w-3/4 animate-pulse mb-2"></div>
                        <div className="h-3 bg-gray-800 rounded w-1/2 animate-pulse"></div>
                    </div>
                </div>
                <a
                    href="https://open.spotify.com/playlist/46SRhEdMzN8Keiwh3JHEly?si=92c592b4cb8146bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 text-xs text-gray-400 hover:text-white transition bg-gray-800/50 hover:bg-gray-700/80 rounded-full px-2 py-1"
                >
                    Playlist
                </a>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-md mb-6 w-72 relative">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-400">{error}</p>
                    </div>
                </div>
                <a
                    href="https://open.spotify.com/playlist/46SRhEdMzN8Keiwh3JHEly?si=92c592b4cb8146bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 text-xs text-gray-400 hover:text-white transition bg-gray-800/50 hover:bg-gray-700/80 rounded-full px-2 py-1"
                >
                    Playlist
                </a>
            </div>
        );
    }

    if (!track) {
        return (
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-md mb-6 w-72 relative">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-400">No track currently playing</p>
                    </div>
                </div>
                <a
                    href="https://open.spotify.com/playlist/46SRhEdMzN8Keiwh3JHEly?si=92c592b4cb8146bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-2 right-2 text-xs text-gray-400 hover:text-white transition bg-gray-800/50 hover:bg-gray-700/80 rounded-full px-2 py-1"
                >
                    Playlist
                </a>
            </div>
        );
    }

    return (
        <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-md mb-6 w-72 relative">
            <div className="flex items-center gap-4">
                <img
                    src={track.albumArt}
                    alt={`${track.name} album art`}
                    className="w-12 h-12 rounded"
                />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                         {/* Only show pulsing bars if track is playing */}
                        {track.isPlaying && (
                            <div className="flex gap-1">
                                <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-1 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                        )}
                        <p className="text-sm font-medium truncate">{track.name}</p>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{track.artist}</p>
                    <p className="text-xs text-gray-500">
                        {formatTime(elapsedTime)} / {formatTime(track.duration_ms)}
                    </p>
                </div>
            </div>
            <a
                href="https://open.spotify.com/playlist/46SRhEdMzN8Keiwh3JHEly?si=92c592b4cb8146bd"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-2 right-2 text-xs text-gray-400 hover:text-white transition bg-gray-800/50 hover:bg-gray-700/80 rounded-full px-2 py-1"
            >
                Playlist
            </a>
        </div>
    );
};

export default SpotifyNowPlaying; 