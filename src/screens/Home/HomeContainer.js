import HomeMainView from "./views/HomeMainView";

const HomeContainer = (props) => {
    const { 
        navigation,
        route
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

    const programs = [
        {
            programName: "Ballet Basic",
            category: "Ballet",
            instructor: "Ngoc Han",
            instructorImage: 'https://www.russianballetinternational.com/wp-content/uploads/2022/11/007_5054-Bolshoi-Academy-Vaganova-Method-Level-2-Level-3-1024x682.jpg',
            level: 'BEGINNER',
            lessonAmount: 15,
            image: 'https://img.freepik.com/premium-photo/dance-ballet-studio-with-woman-dancer-training-practicing-dancing-performance-recital-rehearsal-artistic-perform-technique-with-young-female-school-production-art_590464-81910.jpg',

            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHdZ2dMu6iPlTO62u0iwyL-gXlEO1pyBQToaodjY5izWyDcI8ohCh3SVJBzCzb8-aUio&usqp=CAU',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://media.istockphoto.com/id/1272937508/vi/anh/ballerina-dancing-with-silk-fabric-modern-ballet-dancer-in-fluttering-waving-cloth-pointe-shoes.jpg?s=612x612&w=0&k=20&c=YzCYit-TSpIQdrjJZhbWkgipgHzNUspeWI-xYrnrCHU=',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            programName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            instructorImage: 'https://new1m.s3.ap-northeast-2.amazonaws.com/teachers/profile/152_240213001705817.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 8,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593",
            
            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
        {
            programName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            instructorImage: 'https://i.ytimg.com/vi/5tZ7OaEbQBk/sddefault.jpg',
            level: "INTERMEDIATE",
            lessonAmount: 5,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593",

            lessons: [
                {
                    lessonName: 'How to do plete',
                    totalTime: '1:15',
                    lessonImage: 'https://www.giasutainangtre.vn/gstnt/uploaddata/images/ballet%20cho%20nguoi%20lon.jpg',
                    lesonsVideo: ' ',
                },
                {
                    lessonName: 'How to do catfish',
                    totalTime: '1:15',
                    lessonImage: 'https://bizweb.dktcdn.net/thumb/grande/100/356/785/articles/e5.jpg?v=1592195836593',
                    lesonsVideo: ' ',
                },
            ]
        },
    ];

    const saveLessons = [
        {
            lessonName: 'The Boy Is Mine',
            category: "Chogreophy",
            instructor: "Redy",
            level: "INTERMEDIATE",
            timeDuring: 16,
            image: "https://unica.vn/media/imagesck/1612428593_Choreography-la-gi.jpg?v=1612428593"
        },
        
    ];

    const propsHome = {
        navigation,
        lessons,
        programs,
        saveLessons

    };

    return <HomeMainView{...propsHome} />
}

export default HomeContainer;