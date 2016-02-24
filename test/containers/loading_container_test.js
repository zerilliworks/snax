import chai, {expect, assert} from 'chai'
import React from 'react'
import ReactTestUtil from 'react-addons-test-utils'
import ReactDOMServer from 'react-dom/server'
import LoadingContainer, {LoadingState, PresentState, EmptyState} from 'containers/loading'

describe('LoadingContainer', () => {

  it('shows default loader on empty contents', () => {
    const Component = (
      <LoadingContainer content={undefined} useLoader>
        <PresentState>
          <h1>Present</h1>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Component)
    expect(rendered).to.contain("Loading...")
    expect(rendered).to.not.contain("Present")
    expect(rendered).to.not.contain("Empty")
  })

  it('shows custom loader on empty contents', () => {
    const Component = (
      <LoadingContainer content={undefined}>
        <LoadingState>
          <div>
            <img src="loader.gif" alt=""/>
            <span>Wow, very fancy loader</span>
          </div>
        </LoadingState>
        <PresentState>
          <h1>Present</h1>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Component)
    expect(rendered).to.contain("very fancy loader")
    expect(rendered).to.not.contain("Present")
    expect(rendered).to.not.contain("Empty")
  })

  it('shows empty state when empty', () => {
    const property = []
    const Component = (
      <LoadingContainer content={property}>
        <PresentState>
          <h1>Present</h1>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Component)
    expect(rendered).to.contain("Empty")
    expect(rendered).to.not.contain("Present")
  })

  it('shows present state when full', () => {
    const property = [1, 2, 3]
    const Component = (
      <LoadingContainer content={property}>
        <PresentState>
          <div>
            <h1>Present</h1>
            <ul>
              {property.map(n => <li>{n}</li>)}
            </ul>
          </div>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered = ReactDOMServer.renderToStaticMarkup(Component)
    expect(rendered).to.contain("Present")
    expect(rendered).to.contain("<li>1</li>")
    expect(rendered).to.contain("<li>2</li>")
    expect(rendered).to.contain("<li>3</li>")
    expect(rendered).to.not.contain("Empty")
  })

  it('shows error state when errored', () => {
    const Component1 = (
      <LoadingContainer content={[]} error={true}>
        <PresentState>
          <div>
            <h1>Present</h1>
            <p>Oh, it's here all right.</p>
          </div>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered1 = ReactDOMServer.renderToStaticMarkup(Component1)
    expect(rendered1).to.contain("The server responded with an error")
    expect(rendered1).to.not.contain("Empty")
    expect(rendered1).to.not.contain("Present")

    const Component2 = (
      <LoadingContainer content={new Error("Could not load this")}>
        <PresentState>
          <div>
            <h1>Present</h1>
            <p>Oh, it's here all right.</p>
          </div>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered2 = ReactDOMServer.renderToStaticMarkup(Component2)
    expect(rendered2).to.contain("The server responded with an error")
    expect(rendered2).to.not.contain("Empty")
    expect(rendered2).to.not.contain("Present")
  })

  it('obeys manual loading setting', () => {
    const Component1 = (
      <LoadingContainer content={[1, 2, 3]} useLoader loading={true}>
        <PresentState>
          <h1>Present</h1>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered1 = ReactDOMServer.renderToStaticMarkup(Component1)
    expect(rendered1).to.contain("Loading...")
    expect(rendered1).to.not.contain("Present")
    expect(rendered1).to.not.contain("Empty")

    const Component2 = (
      <LoadingContainer content={[1, 2, 3]} useLoader loading={false}>
        <PresentState>
          <h1>Present</h1>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered2 = ReactDOMServer.renderToStaticMarkup(Component2)
    expect(rendered2).to.contain("Present")
    expect(rendered2).to.not.contain("Loading...")
    expect(rendered2).to.not.contain("Empty")

    const Component3 = (
      <LoadingContainer content={[]} useLoader loading={false}>
        <PresentState>
          <h1>Present</h1>
        </PresentState>
        <EmptyState>
          <h1>Empty</h1>
        </EmptyState>
      </LoadingContainer>
    )

    const rendered3 = ReactDOMServer.renderToStaticMarkup(Component3)
    expect(rendered3).to.contain("Empty")
    expect(rendered3).to.not.contain("Loading...")
    expect(rendered3).to.not.contain("Present")
  })

})
