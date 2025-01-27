import { FormFields } from './FormFields';
import { Renderer } from './Renderer';
import { FileRegistry } from './FileRegistry';

export { FormFields };

export * from './components';
export * from './context';
export { useExpressionEvaluation, useSingleLineTemplateEvaluation, useTemplateEvaluation } from './hooks';

export const RenderModule = {
  __init__: ['formFields', 'renderer'],
  formFields: ['type', FormFields],
  renderer: ['type', Renderer],
  fileRegistry: ['type', FileRegistry],
};
