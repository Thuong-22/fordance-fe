import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";

import LibraryHeader from "../../../components/LibraryHeader";

//COMPONENT
import Lesson2Component from "../../../components/Lesson2Component";

//VIEW
import InstructorMainView from "../../Instructor/views/InstructorMainView";
import CategoryMainView from "../../Category/views/CategoryMainView";
import WiderProgramComponent from "../../../components/WiderProgramComponent";

const LibraryMainView = (props) => {
    const {
        navigation,
        lessons,
        programs,
        categories,
        instructors,

    } = props;


    const handleNavDetailLesson = () => {
        navigation.navigate('Lesson', { tabBarVisible: false });
    }

    const handleNavDetailProgram = (
        programData
    ) => {
        // console.log("PROGRAM DATA AFTER PROPS FROM LIBRARY MAIN VIEW: ", programData);
        navigation.navigate('Program', {
            tabBarVisible: false,
            program: programData
        });
    }

    const handleNavDetailInstructor = () => {
        navigation.navigate('Instructor')
    }

    const [content, setContent] = useState("Lessons"); // State để xác định nội dung hiện tại

    return (
        <SafeAreaView style={styles.container}>
            <LibraryHeader onButtonPress={setContent} />
            <View style={styles.contentContainer}>
                {content === "Lessons" &&
                    <View style={styles.libraryContainer}>
                        <Text style={styles.text}>Classes</Text>
                        <View style={styles.classesContainer}>
                            <FlatList
                                data={lessons}
                                renderItem={({ item, index }) =>
                                    <View style={{ marginBottom: 25 }}>
                                        <Lesson2Component
                                            lessons={item}
                                            handleNav={handleNavDetailLesson}
                                        />
                                    </View>
                                }
                                horizontal={false}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>
                }
                {content === "Programs" &&
                    <View style={styles.libraryContainer}>
                        <Text style={styles.text}>Programs</Text>
                        <View style={styles.programsContainer}>
                            <FlatList
                                data={programs}
                                renderItem={({ item, index }) =>
                                    <View key={index} style={{ marginBottom: 24 }}>
                                        <WiderProgramComponent
                                            program={item}
                                            handleNav={() => handleNavDetailProgram(
                                                programData = item
                                            )}

                                        />
                                    </View>
                                }
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </View>

                }
                {content === "Categories" && <CategoryMainView categories={categories} navigation={navigation} />}
                {content === "Instructors" &&
                    <InstructorMainView instructors={instructors} navigation={navigation} />
                }
            </View>
        </SafeAreaView >
    );
};

export default LibraryMainView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    libraryContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        position: "absolute",
        top: 0,
        left: 0,
        margin: 16,
        fontSize: 20,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'flex-start',
    },

    classesContainer: {
        flex: 1,
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    programsContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'pink'
    },
    instructorContainer: {
        flex: 1,
        // flexDirection: 'column',
        paddingHorizontal: 16,
        marginTop: 70,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'pink'
    },
});
