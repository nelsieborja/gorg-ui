UI library using React, Storybook and Emotion.

## Objectives

- Build higher-quality and more polish UI, at the same time modular and reusable
- Publish it as an NPM package so can easily be shared across projects.

## Components 🦋

### UI

- [x] Button
- [x] Button Icon
- [ ] Card
- [ ] Charts
- [x] Dialog
- [ ] Datepicker
- [x] Drawer
- [x] Expansion Panel
- [x] Menu
- [x] Switch
- [x] Tab
- [ ] ...

### Form

- [x] Checkbox
- [x] Radio
- [x] Textfield
- [x] Select

### Layout+

- [x] Grid System (best alternative: [styled-system](https://styled-system.com/responsive-styles)'s Responsive Styles, [Reflexbox](//rebassjs.org/reflexbox/) but quite huge in size)
- [x] Form Validation (best alternative: [React Hook Form](https://react-hook-form.com/))
- [ ] Slider
- [ ] ...

---

### TODO

- Migration to Typescript
- Theming intergration with [styled-system](https://styled-system.com/responsive-styles)

- Enhance documentation with [@storybook/addon-docs](https://www.npmjs.com/package/@storybook/addon-docs)

### Note

Further development of this project has now been privatized. In case you are curious about the progress of the project, feel free to check out the demo uploaded in this [link](https://gorg-ui-v2.netlify.com/?path=/story/button-icon--icons-only).

### Issue

Need to wait for [this](https://github.com/facebook/create-react-app/pull/6633) PR to be merged before module import aliasing starts working for CRA with Jest. Alternative solution can be found [here](https://github.com/facebook/create-react-app/issues/5652) but it suggests to use yet another dependency, not a big fan of dependencies.

### Credit

- [Icons](https://www.flaticon.com/packs/ui-interface-25)
