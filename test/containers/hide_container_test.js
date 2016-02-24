/**
 * Created by zerilliworks on 2/15/16.
 */
import chai, {expect, assert} from 'chai'
import React from 'react'
import ReactTestUtil from 'react-addons-test-utils'
import ReactDOMServer from 'react-dom/server'
import Hide from 'containers/hide'

describe('Hiding container', () => {

  it('hides on boolean true', () => {
    const Container = (
      <Hide when={true}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on boolean false', () => {
    const Container = (
      <Hide when={false}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on full array', () => {
    const Container = (
      <Hide when={[1, {a: 2}, "feh"]}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on empty array', () => {
    const Container = (
      <Hide when={[]}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on full object', () => {
    const Container = (
      <Hide when={{a: 2}}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on empty object', () => {
    const Container = (
      <Hide when={{}}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on full string', () => {
    const Container = (
      <Hide when={"whatta racket"}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on empty string', () => {
    const Container = (
      <Hide when={""}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('shows on zero', () => {
    const Container = (
      <Hide when={0}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on non-zero', () => {
    const Container = (
      <Hide when={42}>
        <h1>Show Me</h1>
      </Hide>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

})
