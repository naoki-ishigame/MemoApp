import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (

      <View style={styles.memoList}>
        <View style={styles.memoListItems}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/7/25</Text>
        </View>

        <View style={styles.memoListItems}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/7/25</Text>
        </View>

        <View style={styles.memoListItems}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/7/25</Text>
        </View>

        <View style={styles.memoListItems}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/7/25</Text>
        </View>

        <View style={styles.memoListItems}>
          <Text style={styles.memoTitle}>講座のアイテム</Text>
          <Text style={styles.memoDate}>2019/7/25</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  memoListItems: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  memoTitle: {
    fontSize: 18,
    marginBottom: 4,
  },
  memoDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});


export default MemoList;
