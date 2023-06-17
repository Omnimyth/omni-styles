# Swatches
Swatches are used for both documentation as well as online generators.  The component is self-closing and can be
used inside `Vue` components with the `<omni-swatch />` tag.

## Props
The props available in the swatch component are:
| Prop | Default | Description | Type | Required |
|------|---------|-------------|------|----------|
| `hex` | `undefined` | The hexadecimal value of the desired color, formatted as `#000000`. | `String` | Yes** |
| `rgba` | `undefined` | The RGBA value of the desired color, formatted as `rgba(0,0,0,0)`. | `String` | Yes** |
| `rgb` | `undefined` | The RGB value of the desired color, formatted as `rgb(0,0,0)`. | `String` | Yes** |
| `name` | `undefined` | The name of the color. | `String` | No |
| `label` | `undefined` | A code variable name, or other technical label.  This will only appear if `name` is populated. | `String` | No |
| `show—code` | `false` | If the component should show the color code value. | `boolean` | No |
| `dark` | `false` | If the color code value should be rendered in dark mode. | `boolean` | No |
| `width` | `100%` | The desired width of the swatch component. | `String` | No |

****Important:** One of `hex`, `rgba`, or `rgb` are required.  If multiple are provided, they will be used in that order.

## Example
<omni-swatch hex="#6d9c84" name="Douglas Fir" label="$primary-button-light" :show-code="true" :dark="false" />
## Code sample
```vue
<omni-swatch
    hex="#6d9c84"
    name="Douglas Fir"
    label="$primary-button-light"
    :show-code="true"
    :dark="false"
/>
```