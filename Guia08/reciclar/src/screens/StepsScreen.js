import {useState} from "react";
import StepScreen from "./StepScreen";

const StepsScreen = ({ route, navigation }) => {
    const { steps } = route.params;  // Extraer parámetros correctamente
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigation.navigate('Inicio'); // Asegúrate de que "Inicio" exista en tu navegación
        }
    };

    return (
        <StepScreen
            step={steps[currentStep].step}
            description={steps[currentStep].description}
            onNextStep={handleNextStep}
        />
    );
};

export default StepsScreen;