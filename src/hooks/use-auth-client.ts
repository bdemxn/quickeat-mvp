"use client";

import { authClient } from "@/lib/auth/client";

export function useAuthClient() {
	async function signInWithEmailAndPassword(email: string, password: string) {
		const { data, error } = await authClient.signIn.email({ email, password });
		if (error) throw error;
		return data;
	}

	async function signUpWithEmailAndPassword(
		email: string,
		password: string,
		name: string,
	) {
		const { data, error } = await authClient.signUp.email({
			email,
			password,
			name,
		});
		if (error) throw error;
		return data;
	}

	async function getSession() {
		const { data, error } = await authClient.getSession();
		if (error) throw error;
		return data;
	}

	async function signOut() {
		const { data, error } = await authClient.signOut();
		if (error) throw error;
		return data;
	}

	async function createOrganization(name: string, slug: string, logo?: string) {
		const { data, error } = await authClient.organization.create({
			name,
			slug,
			logo,
		});
		if (error) throw error;
		return data;
	}

	return {
		signInWithEmailAndPassword,
		signUpWithEmailAndPassword,
		getSession,
		createOrganization,
		signOut,
	};
}
