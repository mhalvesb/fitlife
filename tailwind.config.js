// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        
        fontFamily:{
          title: ["Poppins", "sans-serif"],
        },

        width: ({theme}) =>({
            ...Object.fromEntries(
                Array.from({length: 16}, (_, i) =>{
                    const value = 100 + i * 2;
                    const pixels = 400 + i * 8;
                    return [`${value}`, `${pixels}px`]
                })
            )
        }),
        height: ({theme}) =>({
          ...Object.fromEntries(
              Array.from({length: 16}, (_, i) =>{
                  const value = 100 + i * 2;
                  const pixels = 400 + i * 8;
                  return [`${value}`, `${pixels}px`]
              })
          )
      })
        
      },
    },
    plugins: [],
  }