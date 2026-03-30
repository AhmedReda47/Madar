import { useApi } from "./api"

export const getBlogs = async (): Promise<Blog[]> => {
    const api = useApi()
    return await api('/blogs')
}