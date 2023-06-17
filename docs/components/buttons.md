# Buttons

Buttons are for on-page actions.  Links can also be styled as buttons, but are intended for navigation between pages.

## Props
The props available in the swatch component are:
| Prop | Default | Description | Type | Required |
|------|---------|-------------|------|----------|
| `type` | `undefined` | The styled visual class of button.  Possible values: `primary`, `secondary`, `tertiary` | `String` | Yes |
| `size` | `medium` | The size of button.  Possible values: `small`, `medium`, `large`, `extra-large` | `String` | No |
| `text` | `undefined` | The text inside of the button.  Supports icons. | `String` | Yes |
| `action` | `undefined` | The action in the form of a function that will be performed when the button is clicked. | `function` | Yes |


## Examples
### Primary
<div style="display:flex;align-items:baseline;justify-content:space-between;max-width:600px;margin-top:24px;">
    <div>
        <strong style="display:block">Small</strong>
        <omni-button type="primary" size="small" text="Button" />
    </div>
    <div>
        <strong style="display:block">Medium</strong>
        <omni-button type="primary" size="medium" text="Button" />
    </div>
    <div>
        <strong style="display:block">Large</strong>
        <omni-button type="primary" size="large" text="Button" />
    </div>
    <div>
        <strong style="display:block">Extra Large</strong>
        <omni-button type="primary" size="extra-large" text="Button" />
    </div>
</div>

### Secondary
<div style="display:flex;align-items:baseline;justify-content:space-between;max-width:600px;margin-top:24px;">
    <div>
        <strong style="display:block">Small</strong>
        <omni-button type="secondary" size="small" text="Button" />
    </div>
    <div>
        <strong style="display:block">Medium</strong>
        <omni-button type="secondary" size="medium" text="Button" />
    </div>
    <div>
        <strong style="display:block">Large</strong>
        <omni-button type="secondary" size="large" text="Button" />
    </div>
    <div>
        <strong style="display:block">Extra Large</strong>
        <omni-button type="secondary" size="extra-large" text="Button" />
    </div>
</div>

### Tertiary
<div style="display:flex;align-items:baseline;justify-content:space-between;max-width:600px;margin-top:24px;">
    <div>
        <strong style="display:block">Small</strong>
        <omni-button type="tertiary" size="small" text="Button" />
    </div>
    <div>
        <strong style="display:block">Medium</strong>
        <omni-button type="tertiary" size="medium" text="Button" />
    </div>
    <div>
        <strong style="display:block">Large</strong>
        <omni-button type="tertiary" size="large" text="Button" />
    </div>
    <div>
        <strong style="display:block">Extra Large</strong>
        <omni-button type="tertiary" size="extra-large" text="Button" />
    </div>
</div>

## Code sample
```vue
<omni-button
    type="tertiary"
    size="large"
    text="Button"
    :action="functionName()"
/>
```
