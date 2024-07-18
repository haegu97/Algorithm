function solution(s) {
    let minCompressedLength = s.length;
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let compressed = "";
        let prev = s.substring(0, i); 
        let count = 1;
        for (let j = i; j < s.length; j += i) {
            const next = s.substring(j, j + i); 
            if (prev === next) {
                count++; 
            } else {
                compressed += (count > 1 ? count : "") + prev;
                prev = next; 
                count = 1;
            }
        }
        compressed += (count > 1 ? count : "") + prev;

        minCompressedLength = Math.min(minCompressedLength, compressed.length);
    }

    return minCompressedLength;
}
