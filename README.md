# Multi-step Component | React + TypeScript + Tailwind
* Live Project: [Click Here](https://steps-react-component-three.vercel.app/)

This project is based on [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). In the beginning of the course section, the instructor introduced a multi-step modal we would be building together. Confident in my current React knowledge and skills, I chose to view only the design and then code the project independently.

## Challenges I Faced and Solutions
### Challenge 1: Structuring the Project and Identifying Necessary Functions
To make the multi-step modal work, I based the entire project on the state of the current step, represented as a number. The active step bubble, displayed message, and the enabling/disabling of the previous and next buttons were all controlled by this state. The next button's enabled state was determined by the length of the messages array. For example, with an array of 5 messages, when the current step is 5, the next button is disabled, and when the current step is 1, the previous button is disabled.

### Challenge 2: Logic for Disabling Buttons and Changing Styles Based on State
A few days ago, I attended a 3-day live mini-course from [Rocketseat](https://www.rocketseat.com.br/). In this mini-course, they taught exactly what I needed: changing component styles based on state. They used the [Tailwind Variants](https://www.tailwind-variants.org/) library, so I decided to use it as well. Tailwind Variants allows you to set a `tv` function in your component file. Here's a full example:
```typescript
import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const componentVariants = tv({
    base: 'base component css here',

    variants: {
        variant: {
            default: 'default styling here',
            disabled: 'disabled styling here'
        },
    },

    defaultVariants: {
        variant: 'default',
    }
})

interface ComponentProps extends VariantProps<typeof componentVariants> {}

export function Component({ variant }: ComponentProps) {
    return (
        <div className={componentVariants({ variant })}>
            {/* Component content here */}
        </div>
    )
}

// Call the component using the variants
<Component variant="disabled" />
```
With this approach, my logic was complete, and the multi-step modal was functioning as expected!

## Final Conclusion 
In conclusion, I completed this project in an hour and a half, and it significantly enhanced my understanding of state and props manipulation in React.

# Componente Multi-step | React + TypeScript + Tailwind
* Projeto ao Vivo: [Clique Aqui](https://steps-react-component-three.vercel.app/)

Este projeto é baseado no [The Ultimate React Course](https://www.udemy.com/course/the-ultimate-react-course/). No início da seção do curso, o instrutor apresentou um modal multi-step que construiríamos juntos. Confiante no meu conhecimento e habilidades atuais com React, optei por visualizar apenas o design e, em seguida, codar o projeto por conta própria.

## Desafios que Enfrentei e Soluções
### Desafio 1: Estruturação do Projeto e Identificação das Funções Necessárias
Para fazer o modal multi-step funcionar, baseei todo o projeto no estado do step atual, representado como um número. A bolha do step ativo, a mensagem exibida e a habilitação/desabilitação dos botões de "anterior" e "próximo" foram todos controlados por esse estado. O estado de habilitação do botão "próximo" foi determinado pelo comprimento do array de mensagens. Por exemplo, com um array de 5 mensagens, quando o step atual é 5, o botão "próximo" é desabilitado, e quando o step atual é 1, o botão "anterior" também é desabilitado.

### Desafio 2: Lógica para Desabilitar Botões e Alterar Estilos com Base no Estado
Alguns dias atrás, participei de um mini-curso ao vivo de 3 dias da [Rocketseat](https://www.rocketseat.com.br/). Neste mini-curso, eles ensinaram exatamente o que eu precisava: alterar estilos de componentes com base no estado. Eles usaram a biblioteca [Tailwind Variants](https://www.tailwind-variants.org/), então decidi usá-la também. O Tailwind Variants permite definir uma função `tv` no arquivo do seu componente. Aqui está um exemplo completo:
```typescript
import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const componentVariants = tv({
    base: 'css base do componente aqui',

    variants: {
        variant: {
            default: 'estilo padrão aqui',
            disabled: 'estilo desabilitado aqui'
        },
    },

    defaultVariants: {
        variant: 'default',
    }
})

interface ComponentProps extends VariantProps<typeof componentVariants> {}

export function Component({ variant }: ComponentProps) {
    return (
        <div className={componentVariants({ variant })}>
            {/* Conteúdo do componente aqui */}
        </div>
    )
}

// Chame o componente usando as variantes
<Component variant="disabled" />
```
Com essa abordagem, minha lógica estava completa e o modal multi-step estava funcionando conforme esperado!

## Conclusão Final
Em conclusão, completei este projeto em uma hora e meia, e ele melhorou significativamente minha compreensão sobre manipulação de estado e props no React.