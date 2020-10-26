export function apiCaller<T extends object>(url: string) : Promise<T|T[]> {
    return fetch(url)
        .then(response => {
            if (!response.ok)
                throw new Error(response.statusText);
            return response.json() as Promise<T|T[]>
        })
}