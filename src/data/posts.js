const posts = [
    {
        _id: "1",
        category: "Tech",
        title: "Come iniziare con React",
        cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
        readTime: {
            value: 5,
            unit: "min"
        },
        author: {
            firstName: "Mario",
            lastName: "Rossi",
            avatar: "https://i.pravatar.cc/150?img=3"
        },
        content: "React è una libreria JavaScript molto usata per costruire interfacce moderne e component-based."
    },
    {
        _id: "2",
        category: "Lifestyle",
        title: "Routine del mattino produttiva",
        cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
        readTime: {
            value: 3,
            unit: "min"
        },
        author: {
            firstName: "Anna",
            lastName: "Verdi",
            avatar: "https://i.pravatar.cc/150?img=5"
        },
        content: "Una buona routine del mattino può migliorare concentrazione, energia e organizzazione della giornata."
    },
    {
        _id: "3",
        category: "Travel",
        title: "Weekend a Lisbona",
        cover: "https://images.unsplash.com/photo-1513735492246-483525079686",
        readTime: {
            value: 4,
            unit: "min"
        },
        author: {
            firstName: "Luca",
            lastName: "Bianchi",
            avatar: "https://i.pravatar.cc/150?img=8"
        },
        content: "Lisbona è una città perfetta per un weekend: tram storici, miradouros e cibo ottimo."
    }
]

export default posts