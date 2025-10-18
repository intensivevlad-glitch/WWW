import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  description?: string
}

export default function SEO({ title = 'Charity Foundation', description = 'Together we bring hope.' }: Props) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}



