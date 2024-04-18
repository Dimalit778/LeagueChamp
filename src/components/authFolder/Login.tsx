// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   ImageBackground,
// } from 'react-native';
// import React, { useState } from 'react';
// import Colors from '../../myAssets/colors/Colors';
// import { Fontisto } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import { FontAwesome5 } from '@expo/vector-icons';
// import { Button } from 'react-native-elements';
// import { useRouter } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useAuth, useEmailPasswordAuth } from '@realm/react';
// import LoadingBall from '../LoadingBall';

// // import Toast from 'react-native-toast-message';
// //API
// const image = {
//   uri: 'https://w0.peakpx.com/wallpaper/355/120/HD-wallpaper-champions-league-icio-uefa-champions-league.jpg',
// };
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { logInWithAnonymous } = useAuth();
//   const { logIn, result } = useEmailPasswordAuth();
//   // hooks
//   const router = useRouter();

//   // login function
//   const handleLogin = () => {
//     console.log(email, password);
//     logIn({ email, password });
//     // if (email == '' || password == '') {
//     //   Toast.show({
//     //     type: 'error',
//     //     text1: 'Please enter All Fields',
//     //   });
//     //   return;
//     // }
//     // const user = {
//     //   email: email,
//     //   password: password,
//     // };
//     // dispatch(login(user)).then((action) => {
//     //   if (action.error) {
//     //     Toast.show({
//     //       type: 'error',
//     //       text1: action.payload,
//     //     });
//     //   } else {
//     //     Toast.show({
//     //       type: 'success',
//     //       text1: 'Login Successfully',
//     //     });
//     //     router.replace('(user)');
//     //   }
//     // });
//   };
//   console.log(result);
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ImageBackground source={image} style={styles.image}>
//         <View style={{ alignItems: 'center', width: 460, paddingTop: 100 }}>
//           <Text
//             style={{
//               color: Colors.gray,
//               fontSize: 64,
//               fontWeight: 'bold',
//               paddingBottom: 20,
//             }}
//           >
//             Login
//           </Text>
//           <Button title="LOG IN" onPress={() => logInWithAnonymous()} />
//           <View
//             style={{
//               backgroundColor: Colors.gray,
//               height: 700,
//               width: 460,
//               borderTopLeftRadius: 130,
//               paddingTop: 50,
//               alignItems: 'center',
//             }}
//           >
//             <Text
//               style={{
//                 fontSize: 40,
//                 color: Colors.dark,
//                 fontWeight: 'bold',
//               }}
//             >
//               Welcome Back
//             </Text>
//             <Text
//               style={{
//                 color: Colors.darkGreen,
//                 fontSize: 18,
//                 fontWeight: 'bold',
//                 marginBottom: 20,
//               }}
//             >
//               Login to your account
//             </Text>
//             {result.pending && <LoadingBall />}
//             {result.error && <Text>Error </Text>}
//             {/* EMAIL  Input */}
//             <View style={styles.inputBox}>
//               <Fontisto name="email" size={28} color="black" />
//               <TextInput
//                 style={styles.textInput}
//                 value={email}
//                 placeholder="Email"
//                 placeholderTextColor={'gray'}
//                 keyboardType={'email-address'}
//                 onChangeText={(text) => setEmail(text)}
//               />
//             </View>
//             {/* PASSWORD Input */}
//             <View style={styles.inputBox}>
//               <Feather name="lock" size={28} color="black" />
//               <TextInput
//                 style={styles.textInput}
//                 value={password}
//                 placeholder="Password"
//                 placeholderTextColor={'gray'}
//                 secureTextEntry={true}
//                 onChangeText={(text) => setPassword(text)}
//               />
//             </View>
//             <Button
//               title="LOG IN"
//               buttonStyle={{
//                 backgroundColor: Colors.darkGrey,
//                 borderWidth: 2,
//                 borderColor: 'white',
//                 borderRadius: 30,
//                 marginTop: 30,
//               }}
//               containerStyle={{
//                 width: 250,
//                 height: 100,
//                 marginVertical: 10,
//               }}
//               titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
//               onPress={() => handleLogin()}
//             />

//             <View
//               style={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'center',
//               }}
//             >
//               <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
//                 Don't have an account ?
//               </Text>
//               <TouchableOpacity onPress={() => router.replace('/Register')}>
//                 <Text
//                   style={{
//                     color: 'blue',
//                     fontWeight: 'bold',
//                     fontSize: 16,
//                   }}
//                 >
//                   Sign Up
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// export default Login;
// const styles = StyleSheet.create({
//   inputBox: {
//     flexDirection: 'row',
//     backgroundColor: 'rgb(220,220, 220)',
//     width: '90%',
//     marginVertical: 10,
//     marginLeft: 50,
//     borderRadius: 15,
//     padding: 15,
//     borderColor: Colors.dark,
//     borderWidth: 1,
//   },
//   textInput: {
//     alignContent: 'flex-start',
//     borderRadius: 100,
//     color: 'black',
//     fontSize: 18,
//     paddingHorizontal: 15,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
// });
