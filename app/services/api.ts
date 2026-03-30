export const useApi = () => {
    const config = useRuntimeConfig()

    return $fetch.create({
        baseURL: config.public.baseURL,
        headers: {
            'Authorization': `Bearer ${config.public.apiToken}`
        }
    })
}