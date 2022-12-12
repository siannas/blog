import * as React from "react"
// import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { CopyBlock, atomOneLight } from "react-code-blocks";

import Bio from "../components/bio"
import Layout from "../components/layout"
import parse, {domToReact} from 'html-react-parser'

const str = `<!-- wp:code -->
<pre class="wp-block-code"><code>&lt;h2 className="ui dividing header">
    &lt;a href="#subtitle-1">
        &lt;div>
            Subtitle
            &lt;span className="right floated" id="subtitle-1">#&lt;/span>
        &lt;/div>
    &lt;/a>
&lt;/h2>
&lt;p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
    Lorem Ipsum.&lt;/p>
&lt;div className="ui divided items">
    &lt;div className="item">
        &lt;img className="ui centered fluid image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeshxF26OtnqN-riafCWwaiNfTskaLwFG_A&amp;usqp=CAU" />
    &lt;/div>
    &lt;div class="ui divider">&lt;/div>
    &lt;p className="ui my-text center aligned my-caption">
        &lt;i>gambar caption caption&lt;/i>
    &lt;/p>
&lt;/div></code></pre>
<!-- /wp:code -->`

const options = {
  replace: ({ name, attribs, children}) => {
    if (!attribs) {
      return;
    }
    else if (attribs.class === 'wp-block-code') {
      return domToReact(children, options)
      // const props = attributesToProps(domNode.attribs);
      // return <div {...props} />;
    }
    else if (name === 'code') {
      return (<div className="ui segment my-code-font">
        <CopyBlock
          text={children[0].data}
          language={"html"}
          showLineNumbers={true}
          startingLineNumber={1}
          theme={atomOneLight}
          // highlight={"1,2,3"}
          customStyle={{
            fontSize: '1.25rem',
            // borderRadius: '5px',
            // boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
          }}
          codeBlock
        />
      </div>)
    }
  }
};

const SandBox = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  // const featuredImage = data.featuredImage ? getImage(data.featuredImage) : null

  return (
    <Layout location={'sandbox'} title={"siannas Blog"}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>     
          <div className="my-image-container">
            <img className="my-image" src="https://www.notion.so/image/https%3A%2F%2Fwww.notion.so%2Fimages%2Fpage-cover%2Fwoodcuts_14.jpg?table=block&id=95cf7524-27f0-4c36-b6c0-50956c641824&spaceId=229afa14-97db-4702-aa55-a777766458ce&width=2000&userId=9fede124-bb71-4b69-b23c-351888889be7&cache=v2" />     
          </div>
          {/* {featuredImage ? <GatsbyImage image={featuredImage} alt="featuredImage" /> : ''} */}
          <br/>
          <h1 itemProp="headline">Title</h1>
          <p>10-10-2021</p>
        </header>
        <section
          itemProp="articleBody"
        />
        <hr />
          <h2 className="ui dividing header">
            <a href="#subtitle-1">
              <div>
                Subtitle            
                <span className="right floated" id="subtitle-1">#</span>
              </div>
            </a>
          </h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <div className="ui divided items">
            <div className="item">
              <img className="ui centered fluid image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAeshxF26OtnqN-riafCWwaiNfTskaLwFG_A&usqp=CAU" />
            </div>
            <div className="ui divider"></div>
            <p className="ui my-text center aligned my-caption">
              <i>gambar caption caption</i>
            </p>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>          
          {parse(str, options)}
        <footer>
          <Bio />
        </footer>
      </article>
    </Layout>
  )
}

export default SandBox
