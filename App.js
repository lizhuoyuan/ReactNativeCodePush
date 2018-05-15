/**
 * Created by 卓原 on 2018/5/16.
 *
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert
} from 'react-native';

import codePush from 'react-native-code-push';

type Props = {};

export default class App extends Component<Props> {

    componentDidMount() {
        this.codePushUpdate()
    }

    /**
     * 远程服务检测更新
     * IMMEDIATE(0) // 更新完毕，立即生效
     * ON_NEXT_RESTART(1) // 下次启动生效
     * ON_NEXT_RESUME(2) // 切到后台，重新回来生效
     */
    codePushUpdate() {
        codePush.sync({
                installMode: codePush.InstallMode.IMMEDIATE,
                updateDialog: true
            },
            (status) => {
                switch (status) {
                    case codePush.SyncStatus.CHECKING_FOR_UPDATE:
                        alert('codePush.SyncStatus.CHECKING_FOR_UPDATE');
                        break;
                    case codePush.SyncStatus.AWAITING_USER_ACTION:
                        alert('codePush.SyncStatus.AWAITING_USER_ACTION');
                        break;
                    case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                        alert('codePush.SyncStatus.DOWNLOADING_PACKAGE');
                        break;
                    case codePush.SyncStatus.INSTALLING_UPDATE:
                        alert('codePush.SyncStatus.INSTALLING_UPDATE');
                        break;
                    case codePush.SyncStatus.UP_TO_DATE:
                        alert('codePush.SyncStatus.UP_TO_DATE');
                        break;
                    case codePush.SyncStatus.UPDATE_IGNORED:
                        alert('codePush.SyncStatus.UPDATE_IGNORED');
                        break;
                    case codePush.SyncStatus.UPDATE_INSTALLED:
                        alert('codePush.SyncStatus.UPDATE_INSTALLED');
                        break;
                    case codePush.SyncStatus.SYNC_IN_PROGRESS:
                        alert('codePush.SyncStatus.SYNC_IN_PROGRESS');
                        break;
                    case codePush.SyncStatus.UNKNOWN_ERROR:
                        alert('codePush.SyncStatus.UNKNOWN_ERROR');
                        break;
                }
            },
            ({receivedBytes, totalBytes,}) => {
                alert('receivedBytes / totalBytes: ------------    ' + receivedBytes + '/' + totalBytes);
            }
        );
    }

    /**
     * 更新方法
     */
    onButtonPress = () => {
        codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native CodePush2.1!
                </Text>
                <Text style={styles.instructions}>
                   我是更新hhhhhhhhhhh!
                </Text>
                <TouchableOpacity onPress={this.onButtonPress}>
                    <Text>Check for updates</Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
