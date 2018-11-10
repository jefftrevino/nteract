// @flow
import * as React from "react";

import Markdown from "@nteract/markdown";
import Highlighter from "../syntax-highlighter";

export type SourceProps = {
  language: string,
  children: React.Node,
  className?: string,
  theme: "light" | "dark"
};

export class Source extends React.Component<SourceProps> {
  static defaultProps = {
    children: "",
    language: "text",
    className: "input",
    theme: "light"
  };

  render() {
    // Build in a default renderer when they pass a plain string
    // This is primarily for use with non-editable contexts (notebook-preview)
    // to make rendering much faster (compared to codemirror)
    // Ref: https://github.com/nteract/notebook-preview/issues/20
    if (typeof this.props.children === "string" && this.props.language != "markdown") {
      return (
        <Highlighter
          language={this.props.language}
          className={this.props.className}
        >
          {this.props.children}
        </Highlighter>
      );
    }
    else if (this.props.language === "markdown"){
      //return markdown output
      <Markdown
            source={
              this.props.children
                ? this.props.children
                : "*Empty markdown cell, double click me to add content.*"
            }
          />
    }
    else {
    // Otherwise assume they have their own editor component
    return <div className="input">{this.props.children}</div>;
    }
  }
}
