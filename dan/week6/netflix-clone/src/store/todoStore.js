import { configureStore, createSlice } from "@reduxjs/toolkit";


let contents = createSlice({ //state들
  name: "content",
  initialState: [
    { id: 0, name: '이태원클라쓰', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSIbApUlzOF-MKyNe__euO1fx5fEJ0ZH5zPXarD-CzGVetWP4svEkvQApQZjVj14WJXeeNuLfcL_35fg6pIc6qjPrCR8HOw8GbY.webp?r=708' },
    { id: 1, name: '이태원클라쓰', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSIbApUlzOF-MKyNe__euO1fx5fEJ0ZH5zPXarD-CzGVetWP4svEkvQApQZjVj14WJXeeNuLfcL_35fg6pIc6qjPrCR8HOw8GbY.webp?r=708' },
    { id: 2, name: '이태원클라쓰', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSIbApUlzOF-MKyNe__euO1fx5fEJ0ZH5zPXarD-CzGVetWP4svEkvQApQZjVj14WJXeeNuLfcL_35fg6pIc6qjPrCR8HOw8GbY.webp?r=708' },
    { id: 3, name: '마이네임', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSWDG8CUCZGszS34PpwYPUvGWx9MIGA9ASFZi2QAZOF48WKr_XGJxr3B99PRzAGBgTzhbBc3iDYXcVThk-09ZHXxeq-M0KJOPzX8rnipxlIpcvgoJJuMnJslYyYikZbvzRli.jpg?r=b45' },
    { id: 4, name: '마이네임', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSWDG8CUCZGszS34PpwYPUvGWx9MIGA9ASFZi2QAZOF48WKr_XGJxr3B99PRzAGBgTzhbBc3iDYXcVThk-09ZHXxeq-M0KJOPzX8rnipxlIpcvgoJJuMnJslYyYikZbvzRli.jpg?r=b45' },
    { id: 5, name: '마이네임', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSWDG8CUCZGszS34PpwYPUvGWx9MIGA9ASFZi2QAZOF48WKr_XGJxr3B99PRzAGBgTzhbBc3iDYXcVThk-09ZHXxeq-M0KJOPzX8rnipxlIpcvgoJJuMnJslYyYikZbvzRli.jpg?r=b45' },
    { id: 6, name: '진격의거인', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY6Du6Vqyv826_MZsnUUJhxLNKCymwXdGijfPfnkv_HklGqF7WKTW0DLEM09PqnHYEpgpN22tCVuLP7_TrWVlFAGinz3Pl13Etw.webp?r=9cf' },
    { id: 7, name: '진격의거인', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY6Du6Vqyv826_MZsnUUJhxLNKCymwXdGijfPfnkv_HklGqF7WKTW0DLEM09PqnHYEpgpN22tCVuLP7_TrWVlFAGinz3Pl13Etw.webp?r=9cf' },
    { id: 8, name: '진격의거인', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY6Du6Vqyv826_MZsnUUJhxLNKCymwXdGijfPfnkv_HklGqF7WKTW0DLEM09PqnHYEpgpN22tCVuLP7_TrWVlFAGinz3Pl13Etw.webp?r=9cf' },
    { id: 9, name: '더글로리', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVQNRJujXD_Z1uo2gLpopvWltYVj1p7lxeB7yjvqT5bcvFwxJVXvolNaYx2ZCfODZetOKtJv2HdDF-Q3Km5kqEnQM37iXRjD8umymfVZre9zS1t8gRtrF0E53J72svBI2q8E.jpg?r=95f' },
    { id: 10, name: '더글로리', img: 'https://occ-0-325-988.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVQNRJujXD_Z1uo2gLpopvWltYVj1p7lxeB7yjvqT5bcvFwxJVXvolNaYx2ZCfODZetOKtJv2HdDF-Q3Km5kqEnQM37iXRjD8umymfVZre9zS1t8gRtrF0E53J72svBI2q8E.jpg?r=95f' },

  ],

});
export default configureStore({ // reducer로 등록
  reducer: {
    contents: contents.reducer,
  },
});
