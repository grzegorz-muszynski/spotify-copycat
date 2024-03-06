import { FC } from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {}

const Test: FC<Props> = (props: {name: string}) => {
    return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
    container: {},
})

export default Test;