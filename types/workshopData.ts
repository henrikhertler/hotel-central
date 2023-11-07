type Workshop = {
    time: string;
    pills: string[];
    title: string;
    description: string;
    person: {
        name: string;
        description?: string;
    };
    price: string;
    registerHref: string;
};

export type WorkshopData = { day: string; workshops: Workshop[] }[];
