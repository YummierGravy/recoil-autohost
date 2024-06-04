/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type TachyonMessage =
	| TachyonRequest
	| TachyonResponseOk
	| TachyonResponseFail
	| TachyonEvent;
export type TachyonRequest = TachyonBaseMessage & {
	type: 'request';
	data?: unknown;
	[k: string]: unknown;
};
export type TachyonResponseOk = TachyonBaseMessage & {
	type: 'response';
	status: 'success';
	data?: unknown;
	[k: string]: unknown;
};
export type TachyonResponseFail = TachyonBaseMessage & {
	type: 'response';
	status: 'failed';
	reason: 'command_unimplemented' | 'internal_error' | 'invalid_request' | 'unknown_command';
	/**
	 * Additional details about the failure for developers
	 */
	details?: string;
	[k: string]: unknown;
};
export type TachyonEvent = TachyonBaseMessage & {
	type: 'event';
	data?: unknown;
	[k: string]: unknown;
};

export interface TachyonBaseMessage {
	type: 'request' | 'response' | 'event';
	messageId: string;
	commandId: string;
	[k: string]: unknown;
}
