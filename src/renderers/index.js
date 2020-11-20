import {isControl, isLayout, rankWith} from '@jsonforms/core'
import LayoutRenderer from '@/components/LayoutRenderer'
import ControlRenderer from '@/components/ControlRenderer'

export const layoutRenderer = {
  renderer: LayoutRenderer,
  tester: rankWith(1, isLayout)
}

export const controlRenderer = {
  renderer: ControlRenderer,
  tester: rankWith(1, isControl)
}
