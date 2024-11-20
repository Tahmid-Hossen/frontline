export function checkNumberSize(num) {
    // Compute the position within the repeating block of 12
    const position = num % 12;

    // Define the positions that are considered "large"
    const largePositions = [0, 3, 4, 7, 8, 11];

    // Check if the position is one of the large positions
    if (largePositions.includes(position)) {
        return 'large';
    } else {
        return 'small';
    }
}
export function getVariant(variant,index) {
    switch (variant) {
        case "fadeUpVariant":
            return {
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 ,transition: { duration: index ? index*0.3 : 0.5, ease: "easeOut" }},
            };
        case "fadeDownVariant":
            return {
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 ,transition: { duration: index ? index*0.3 : 0.5, ease: "easeOut" }},
            };
        case "fadeLeftVariant":
            return {
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 ,transition: { duration: index ? index*0.3 : 0.5, ease: "easeOut" }},
            };
        case "fadeRightVariant":
            return {
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 ,transition: { duration: index ? index*0.3 : 0.5, ease: "easeOut" }},
            };
        default:
            // Default case is safe and provides fallback animation
            return {
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 ,transition: { duration: index ? index*0.3 : 0.5, ease: "easeOut" }},
            };
    }
}
export function getColorByIndex(index){
    const colorMap = [
        'bg-custom-blue',   // 1
        'bg-custom-pink',   // 2
        'bg-custom-green',  // 3
        'bg-custom-pink2', // 4
        'bg-custom-green2',   // 5
        'bg-rose-100',   // 6
        'bg-pink-200',   // 7
        'bg-green-200',  // 8
        'bg-purple-200', // 9
        'bg-blue-200',   // 10
    ];

    return colorMap[index % colorMap.length];
}