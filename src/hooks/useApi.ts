import { useState, useEffect } from 'react';
import { api } from '../api';

export function useDestinations() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        api.getDestinations()
            .then(res => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}

export function useNews(destinationId?: number) {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        api.getNews(destinationId)
            .then(res => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [destinationId]);

    return { data, loading, error };
}

export function useLatestNews() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        api.getLatestNews()
            .then(res => {
                setData(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}
