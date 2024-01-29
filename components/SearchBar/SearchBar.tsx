import { Pressable, TextInput, TextInputProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';
import { useCallback, useRef } from 'react';


interface SearchBarProps extends TextInputProps {
  onClearText?: () => void;
}
const SearchBar = (props: SearchBarProps) => {
  const { value, onChangeText, onClearText, ...rest } = props;
  const textInputRef = useRef<TextInput>(null);

  const _onChangeText = useCallback((text: string) => {
    onChangeText?.(text);
  }, []);

  const clearText = useCallback(() => {
    if (textInputRef.current) {
      textInputRef.current.clear();
    }
    onClearText?.();
  }, [onClearText]);

  return (
    <View style={styles.container}>
      <Ionicons name='search' size={18} color='#666' />
      <TextInput
        style={styles.input}
        ref={textInputRef}
        value={value}
        onChangeText={_onChangeText}
        placeholderTextColor='#777'
        {...rest}
      />
      {value && (
        <Pressable hitSlop={12} onPress={clearText}>
          <Ionicons name='close' size={18} color='#666' />
        </Pressable>
      )}
    </View>
  );
}

export default SearchBar;