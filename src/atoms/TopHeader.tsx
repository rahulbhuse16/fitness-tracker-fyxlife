import {useNavigation} from '@react-navigation/native';
import { ChevronLeft } from 'lucide-react-native';
import {View,TouchableOpacity, Text} from 'react-native';


interface IProps {
  text: string;
  paddingHorizontal? : import('react-native').ViewStyle['paddingHorizontal'];
  paddingVertical?:import('react-native').ViewStyle['paddingVertical'];
  rightIcon?:React.ReactNode;
  onClikOfRightIcon ? :()=>void;
  isBack ? : boolean;
  goBack ?:()=>void;
}

const TopHeader: React.FC<IProps> = ({text,
    paddingHorizontal=15,
    paddingVertical=12,
    rightIcon=undefined,
    onClikOfRightIcon,
    isBack=true,
    goBack
}) => {
  const navigation = useNavigation();

  const onGoBack=()=>{
    if(isBack){
      navigation.goBack()
    }
    else{
        //@ts-ignore
      goBack()
    }
  }

  return (
    <View
      style={{
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        alignItems: 'center',
        flexDirection:"row",
        height:56,
        elevation:8,
        justifyContent:"space-between",
        backgroundColor:'#141749'
      }}>
      <TouchableOpacity
        onPress={onGoBack}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height:40,
          width:40,
          borderRadius:15,
          backgroundColor:"#5A4E6C",
                    opacity:0.8

        }}>
          {
            !isBack ? (<ChevronLeft size={22}/>)
          :
        (<ChevronLeft color={'#fff'}  size={22} />)}
      </TouchableOpacity>
      <Text
            style={[{
              fontSize:16,
              fontWeight:"bold",
              color:"#fff",
              textAlign:"center",
            }]}>
            {text}
          </Text>
       {
        rightIcon ?
       
       (<TouchableOpacity
        onPress={onClikOfRightIcon}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height:40,
          width:40,
          borderRadius:25,
          backgroundColor:"#DEDEDE",
          opacity:0.8
        }}>
        {
          rightIcon
        }
      </TouchableOpacity>):
      (<View>

      </View>)}
    </View>
  );
};

export default TopHeader;
