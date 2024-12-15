const conversionFactors = {
    length: {
        cm: { cm: 1, m: 0.01, in: 0.393701, ft: 0.0328084 },
        m: { cm: 100, m: 1, in: 39.3701, ft: 3.28084 },
        in: { cm: 2.54, m: 0.0254, in: 1, ft: 0.0833333 },
        ft: { cm: 30.48, m: 0.3048, in: 12, ft: 1 }
    },
    weight: {
        kg: { kg: 1, g: 1000, lb: 2.20462, oz: 35.274 },
        g: { kg: 0.001, g: 1, lb: 0.00220462, oz: 0.035274 },
        lb
