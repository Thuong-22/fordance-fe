import LibraryMainView from "./views/LibraryMainView";

const LibraryContainer = (props) => {
    const {
        navigation,

    } = props;

    const lessons = [
        {
            lessonName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            level: 'BEGINNER',
            timeDuring: 16,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'

        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"

        },
    ]

    const categories = [
        {
            category: "Ballet",
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',
            categoriesItems: [
                {
                    level: "Beginner",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'
                },
                {
                    level: "Intermediate",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'
                },
                {
                    level: "Advanced",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg'
                },

            ]
        },
        {
            category: "Open Style",
            image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593',
            categoriesItems: [
                {
                    level: "Beginner",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593'
                },
                {
                    level: "Intermediate",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593'
                },
                {
                    level: "Advanced",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593'
                },

            ]
        },
        {
            category: "Kpops",
            image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1',
            categoriesItems: [
                {
                    level: "Beginner",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1'
                },
                {
                    level: "Intermediate",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1'
                },
                {
                    level: "Advanced",
                    dancer: "Dancer Name",
                    instructor: "Instructor Name",
                    image: 'https://i0.wp.com/ononestudios.com/wp-content/uploads/2022/07/allkpop_1644246173_blackpink-how-you-like-that-dance-performance-video-2-55-screenshot.png?fit=1024%2C576&ssl=1'
                },

            ]
        },

    ]

    const propsLibrary = {
        navigation,
        lessons,
        categories,

    };

    return <LibraryMainView{...propsLibrary} />
}

export default LibraryContainer;