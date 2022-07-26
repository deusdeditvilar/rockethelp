import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export function dateFormat(timnestamp: FirebaseFirestoreTypes.Timestamp) {
    if(timnestamp) {
        const date = new Date(timnestamp.toDate());

        const day = date.toLocaleDateString('pt-BR');
        const hour = date.toLocaleTimeString('pt-BR');

        return `${day} às ${hour}`
    }
}