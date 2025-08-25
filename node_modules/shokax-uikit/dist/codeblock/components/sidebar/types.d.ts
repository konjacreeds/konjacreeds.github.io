import { NavItemType } from '../navbar/NavTypes';
export interface SidebarState {
    posts: {
        count: number;
        title: string;
        href: string;
    };
    categories: {
        count: number;
        title: string;
        href: string;
    };
    tags: {
        count: number;
        title: string;
        href: string;
    };
}
export interface SocialLink {
    name: string;
    href: string;
    icon: string;
    color?: string;
}
export interface SidebarConfig {
    author: {
        avatar: string;
        name: string;
    };
    socialLinks: SocialLink[];
    state: SidebarState;
    navbar: NavItemType[];
}
