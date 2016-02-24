/**
 * Created by zerilliworks on 2/15/16.
 */
import chai, {expect, assert} from 'chai'
import React from 'react'
import ReactTestUtil from 'react-addons-test-utils'
import ReactDOMServer from 'react-dom/server'
import Show from 'containers/show'

describe('Hiding container', () => {

  it('shows on boolean true', () => {
    const Container = (
      <Show when={true}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on boolean false', () => {
    const Container = (
      <Show when={false}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on full array', () => {
    const Container = (
      <Show when={[1, {a: 2}, "feh"]}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on empty array', () => {
    const Container = (
      <Show when={[]}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on full object', () => {
    const Container = (
      <Show when={{a: 2}}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on empty object', () => {
    const Container = (
      <Show when={{}}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on full string', () => {
    const Container = (
      <Show when={"whatta racket"}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

  it('hides on empty string', () => {
    const Container = (
      <Show when={""}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('hides on zero', () => {
    const Container = (
      <Show when={0}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.not.contain("Show Me")
  })

  it('shows on non-zero', () => {
    const Container = (
      <Show when={42}>
        <h1>Show Me</h1>
      </Show>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Container)
    expect(rendered).to.contain("Show Me")
  })

})
