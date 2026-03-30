export interface TeamSocialLinkResponse {
    type: string
    icon: string
    link: string
}
export interface TeamMemberResponse {
    id: number
    name: string
    job_title: string
    image: {
        url: string
    }
    social_links: TeamSocialLinkResponse[] | null
}