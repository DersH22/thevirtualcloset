import React, { FC, ReactElement, useRef, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  Image
} from 'react-native';
// import { Icon } from 'react-native-elements';

interface Props {
  label: string;
  data: Array<{ label: string; value: string }>;
  onSelect: (item: { label: string; value: string }) => void;
}

const Dropdown: FC<Props> = ({ label, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
    DropdownButton.current.measure((_fx: any, _fy: any, _w: any, h: any, _px: any, py: any) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item: React.SetStateAction<undefined>): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }): ReactElement<any, any> => (
    <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View style={[styles.dropdown, { top: dropdownTop }]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity
      ref={DropdownButton}
      style={styles.button}
      onPress={toggleDropdown}
    >
      {renderDropdown()}
      <Text style={styles.buttonText}>
        {(selected && selected.label) || label}
      </Text>
      <Image style={styles.icon} source={require('../assets/images/dropdown.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: 'white',
    height: 50,
    zIndex: 1,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 10
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    fontSize: 20,
    paddingHorizontal:8,
    paddingVertical:6,
  },
  icon: {
    marginRight: 10,
    height: 20,
    width: 20
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});

export default Dropdown;