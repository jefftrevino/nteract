The `NotebookRender` component allows you to render a static representation of a notebook. This representation includes the inputs and outputs for all cell types. You'll most likely use this component if you'd like to generate a preview for a notebook. Under the hood, the `NotebookRender` uses the components outlined in the [presentational components](#presentational-components) section.

This component accepts a `displayOrder` prop which allows you to dictate which order rich media outputs should be rendered in. This allows you to prioritize certain kinds of rich outputs (images, HTML, etc) over others.

`NotebookRender` also accepts a `transforms` prop which allows you to provide transforms for custom media types. This allows you to provide your own renders in the notebook preview for custom media types.

The component also accepts a `notebook` props which contains the JSON contents of the notebook.