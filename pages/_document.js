import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<meta charSet="UTF-8" />
			<meta name="description" content="I'm ItsJustMiaouss, a passionate developer from France!" />
			<meta property="og:type" content="website" />
      <link href="/css/twemoji.css" rel="stylesheet"></link>
			<Head />
			<body className="bg-dark-gray font-poppins text-gray-100">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}