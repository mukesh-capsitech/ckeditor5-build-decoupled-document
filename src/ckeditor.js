/* eslint-disable linebreak-style */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable array-bracket-spacing */
/* eslint-disable space-in-parens */
/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import DecoupledEditorBase from "@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor";
import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";

import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor";
import Highlight from "@ckeditor/ckeditor5-highlight/src/highlight";
import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import Image from "@ckeditor/ckeditor5-image/src/image";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
import Indent from "@ckeditor/ckeditor5-indent/src/indent";
import IndentBlock from "@ckeditor/ckeditor5-indent/src/indentblock";
import Link from "@ckeditor/ckeditor5-link/src/link";
import List from "@ckeditor/ckeditor5-list/src/list";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat";
import Table from "@ckeditor/ckeditor5-table/src/table";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
import PageBreak from "@ckeditor/ckeditor5-page-break/src/pagebreak";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline";
//import StandardEditingMode from "@ckeditor/ckeditor5-restricted-editing/src/standardeditingmode";

export class DecoupledEditor extends DecoupledEditorBase {}
export class ClassicEditor extends ClassicEditorBase {}

// A simple plugin that extends the remove format feature to consider links.
function RemoveFormatLinks(editor) {
	// Extend the editor schema and mark the "linkHref" model attribute as formatting.
	editor.model.schema.setAttributeProperties("linkHref", {
		isFormatting: true
	});
}

// Plugins to include in the build.
DecoupledEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	Highlight,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	RemoveFormatLinks,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine
];
ClassicEditor.builtinPlugins = [
	Essentials,
	Alignment,
	FontSize,
	FontFamily,
	FontColor,
	FontBackgroundColor,
	Highlight,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Strikethrough,
	Underline,
	Subscript,
	Superscript,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	PageBreak,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	RemoveFormatLinks,
	Table,
	TableToolbar,
	TextTransformation,
	HorizontalLine
];

// Editor configuration.
DecoupledEditor.defaultConfig = {
	toolbar: {
		items: [
			"undo",
			"redo",
			"|",
			"heading",
			"|",
			"fontsize",
			"fontfamily",
			"|",
			"bold",
			"italic",
			"underline",
			"strikethrough",
			"highlight",
			"subscript",
			"superscript",
			"fontColor",
			"fontBackgroundColor",
			"removeFormat",
			"|",
			"alignment",
			"|",
			"numberedList",
			"bulletedList",
			"|",
			"indent",
			"outdent",
			"|",
			"pageBreak",
			"link",
			"blockquote",
			"imageUpload",
			"insertTable",
			"mediaEmbed"
		]
	},
	image: {
		styles: ["full", "alignLeft", "alignRight"],
		toolbar: [
			"imageStyle:alignLeft",
			"imageStyle:full",
			"imageStyle:alignRight",
			"|",
			"imageTextAlternative"
		]
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en"
};
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			"undo",
			"redo",
			"|",
			"heading",
			"|",
			"fontsize",
			"fontfamily",
			"|",
			"bold",
			"italic",
			"underline",
			"strikethrough",
			"highlight",
			"subscript",
			"superscript",
			"fontColor",
			"fontBackgroundColor",
			"removeFormat",
			"|",
			"alignment",
			"|",
			"numberedList",
			"bulletedList",
			"|",
			"indent",
			"outdent",
			"|",
			"pageBreak",
			"link",
			"blockquote",
			"imageUpload",
			"insertTable",
			"mediaEmbed"
		]
	},
	image: {
		toolbar: [
			"imageStyle:full",
			"imageStyle:side",
			"|",
			"imageTextAlternative"
		]
	},
	table: {
		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: "en"
};
