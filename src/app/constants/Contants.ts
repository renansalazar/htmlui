interface IContent {
  description: string
  embedId: string
}
export interface IComponent {
  name: string
  slug: string
  content: IContent[]
}

export const componentsDocs: IComponent[] = [
  {
    name: 'Accordion',
    slug: 'accordion',
    content: [{
      description: `<p>
        Componente colapsable, usando <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/details" target="_blank" rel="noopener noreferrer">Details</a> y <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary" target="_blank" rel="noopener noreferrer">Summary</a>.
      </p>`,
      embedId: 'JjQPyYv'
    }]
  },
  {
    name: 'Alertas',
    slug: 'alerts',
    content: [{
      description: 'Componentes de alertas con variantes success, warning y danger.',
      embedId: 'bGPbrpd'
    }]
  },
  {
    name: 'Breadcrumb',
    slug: 'breadcrumb',
    content: [{
      description: 'Componentes simple de breadcrumb',
      embedId: 'vYqBJgM'
    }]
  },
  {
    name: 'Badge',
    slug: 'badge',
    content: [{
      description: `<p>Componentes de badge con variantes <b>success</b>, <b>warning</b> y <b>danger</b>.</p>`,
      embedId: 'dyBPPxa'
    }]
  },
  {
    name: 'Button',
    slug: 'button',
    content: [{
      description: '<p>Componentes de botones con variantes <b>success</b>, <b>warning</b> y <b>danger</b>.</p>',
      embedId: 'YzozYgb'
    }]
  },
  {
    name: 'Card',
    slug: 'card',
    content: [{
      description: `<p>Componentes simple card.</p>`,
      embedId: 'MWMYaex'
    }]
  },
  {
    name: 'Modal',
    slug: 'modal',
    content: [{
      description: `<p>Componente modal usando el tag <a href="https://developer.mozilla.org/es/docs/Web/HTML/Element/dialog" target="_blank" rel="noopener noreferrer">Dialog</a>.</p>`,
      embedId: 'mdZbBOr'
    }]
  },
  {
    name: 'Tooltip',
    slug: 'tooltip',
    content: [{
      description: `<p>
        Componente tooltip usando el estilo css <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning" target="_blank" rel="noopener noreferrer">Anchor</a>.
      </p>
      <h2>Tooltip top</h2>
      `,
      embedId: 'WNqeYEW'
    },
    {
      description: `
        <h2>Tooltip Right</h2>
      `,
      embedId: 'VwJYYxE'
    },
    {
      description: `
        <h2>Tooltip Bottom</h2>
      `,
      embedId: 'GRbggGa'
    },
    {
      description: `
        <h2>Tooltip Left</h2>
      `,
      embedId: 'dyBPPjg'
    }]
  }
]