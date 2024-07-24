import Button from '@/components/Button';
import { Colors } from '@/constants/Colors';
import { useCounter } from '@/hooks/useCounter';
import { globalStyles } from '@/theme/styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef } from 'react';
import { Text, View } from 'react-native';

export default function Counter() {
  const [counter, incrementCounter, decrementCounter] = useCounter({
    initialValue: 2,
    max: 10,
    min: 0,
  });

  const counterTextRef = useRef<Text>(null);

  useEffect(() => {
    counterTextRef.current?.setNativeProps({
      style: {
        color: Colors.primary,
      },
    });

    setTimeout(() => {
      counterTextRef.current?.setNativeProps({
        style: {
          color: Colors.text,
        },
      });
    }, 50);
  }, [counter]);

  return (
    <View style={globalStyles.centeredScreen}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
        <Button onPress={() => decrementCounter()}>
          <Ionicons name="remove" size={30} color={Colors.text} />
        </Button>

        <Text ref={counterTextRef} style={{ color: Colors.text, fontSize: 40 }}>
          {counter}
        </Text>

        <Button onPress={() => incrementCounter()}>
          <Button.Text>
            <Ionicons name="add" size={30} color={Colors.text} />
          </Button.Text>
        </Button>
      </View>
    </View>
  );
}
