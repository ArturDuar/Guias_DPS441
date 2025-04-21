import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

export default function DetailsScreen(){
    const [projects, setProjects] = useState([
        {id: '1', name: 'Proyecto 1', manager: 'Juan Perez', contact: 'juan@example.com', socialMedia: ['facebook', 'x']},
        {id: '2', name: 'Proyecto 2', manager: 'Maria Gonzales', contact: 'maria@example.com', socialMedia: ['instagram', 'linkedin']},
        {id: '3', name: 'Proyecto 3', manager: 'Maria Perez', contact: 'maria@example.com', socialMedia: ['linkedin', 'x']},
    ]);

    const renderProjectItem = ({item}) => (
        <View style={styles.projectItem}>
            <View style={styles.projectInfo}>
                <Text style={styles.projectName}>{item.name}</Text>
                <Text>Encargado: {item.manager}</Text>
                <Text>Contacto: {item.contact}</Text>
            </View>
            <View style={styles.socialMediaIcons}>
                {item.socialMedia.map((social, index) => (
                    <Image key={index} source={getSocialMediaIcon(social)} style={styles.socialMediaIcon}/>
                ))}
            </View>
        </View>
    );

    const getSocialMediaIcon = (social) => {
        switch (social) {
            case 'facebook':
                return require('../../assets/facebook.png');
            case 'x':
                return require('../../assets/x.png');
            case 'instagram':
                return require('../../assets/instagram.png');
            case 'linkedin':
                return require('../../assets/linkedin.png');
            default:
                return null;
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Proyectos de Reciclaje</Text>
            <FlatList
                data={projects}
                renderItem={renderProjectItem}
                keyExtractor={(item)=> item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },
    projectItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    projectInfo: {
        flex: 1,
    },
    projectName: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    socialMediaIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    socialMediaIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
});
