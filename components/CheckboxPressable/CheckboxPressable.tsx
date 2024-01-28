import { Pressable, PressableProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface CheckboxPressableProps extends PressableProps {
  checked: boolean;
}
const CheckboxPressable = (props: CheckboxPressableProps) => {
  const { checked, ...rest } = props;
  return (
    <Pressable {...rest}>
      {checked && (
        <Ionicons name='checkmark-circle-outline' size={18} color='#306844' />
      )}
      {!checked && (
        <Ionicons name='ellipse-outline' size={18} color='black' />
      )}
    </Pressable>
  );
}

export default CheckboxPressable;