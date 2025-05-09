import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';


    const images = [
        {
            id: 1,
            source: 'https://img.freepik.com/vector-gratis/seminario-web-conceptoecologia-diseno-plano_23-2149849805.jpg?t=st=1710429154~exp=1710432754~hmac=c7572519e4a7ce837e9d25cc1e61af6dc36a8e44ad5c9e811b91669fedb406a0&w=1060',
            description: 'Reduce, Reutiliza, Recicla',
            info: 'Descubre como puedes contribuir al cuidado del medio amiente con simples acciones en tu hogar.'
        },
        {
            id: 2,
            source: 'https://img.freepik.com/vector-gratis/ninos-plantando-arboles-utilizando-energia-renovable-naturaleza-energia-solar-panel-solar-turbina-eolica_1150-43076.jpg?t=st=1710428866~exp=1710432466~hmac=01a424413ed4cd6bed139bb08c5ff1e75e8827',
            description: 'Reciclaje en tu Comunidad',
            info: 'Conoce programas de reciclaje en tu área y participa activamente'
        },
    ];

    export default function HomeScreen(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.bannerTitle}>Bienvenido a Reciclaje Eco</Text>
                    <Text style={styles.bannerText}>Ayudamos a cuidar el medio ambiente a través del reciclaje. !Únete a nosotros</Text>
                    <Button
                        title="Ir a detalle"
                        onPress={() => navigation.navigate('Detail')}
                    />
                </View>
                <View style={styles.featured}>
                    <Text style={styles.featuredTitle}>Destacado</Text>
                    {images.map(image => (
                        <TouchableOpacity key={image.id} style={styles.featuredItem}>
                            <Image source={{uri: image.source}} style={styles.featuredImage}/>
                            <Text style={styles.featuredItemTitle}>{image.description}</Text>
                            <Text style={styles.featuredItemText}>{image.info}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        header: {
            padding:20,
            backgroundColor: '#CEFF25'
        },
        bannerTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000',
        },
        bannerText: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#000',
        },
        bannerButton: {
            backgroundColor: '#ffff00',
            fontSize: 16,
            color: '#000000'
        },
        featured: {
            padding: 0
        },
        featuredTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 10,
        },
        featuredItem:{
            width: '100%',
            height: 200,
            marginBottom: 10,
        },
        featuredItemTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 5,
        },
        featuredItemText: {
            fontSize: 16,
        },
        featuredImage :{
            width: '100%',
            height: 200,
            marginBottom: 10,
        }
    });

    