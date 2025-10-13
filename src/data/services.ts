interface Services {
    id: string;
    slug: string;
    name: string;
    description: string;
    price: number;
}

export const services: Services[] = [
    {
        id: "1",
        slug: "web-development",
        name: "Web Development",
        description: "Building responsive and modern websites.",
        price: 1500,
    }
]
