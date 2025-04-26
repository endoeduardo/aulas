class HashMap():
    """Class that implements hashmap that stores names and some integer values"""
    def __init__(self, size: int = 20):
        self.size = size
        self._data = [[] for _ in range(0, self.size)]
    
    def _hash_string(self, string: str):
        """Hashing function"""
        return hash(string) % self.size

    def add(self, name: str, value: int) -> None:
        """Adds name into the hashmap"""
        index = self._hash_string(name)
        bucket = self._data[index]

        for idx, (key, _) in enumerate(bucket):
            if key == name:
                bucket[idx] = (name, value)
                return

        bucket.append((name, value))
    
    def get(self, name: str) -> int:
        """Returns the value stored for a given name"""
        index = self._hash_string(name)
        bucket = self._data[index]
        for key, value in bucket:
            if key == name:
                return value
        return None
    
    def delete(self, name: str) -> None:
        """Deletes the object from the hashmap"""
        index = self._hash_string(name)
        bucket = self._data[index]
        for idx, (key, _) in enumerate(bucket):
            if key == name:
                del bucket[idx]
                return


if __name__ == "__main__":
    hashmap = HashMap()
    hashmap.add("eduardo", 1)
    hashmap.add("carolina", 2)
    hashmap.add("carolina", 4)
    hashmap.add("carolina", 2)


    print(hashmap.get("carolina"))
