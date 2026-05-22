"use client";

import { useForm } from "@tanstack/react-form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Field,
	FieldContent,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useAuthClient } from "@/hooks/use-auth-client";
import { loginSchema } from "@/shared/validations";

export function LoginForm() {
	const { signInWithEmailAndPassword } = useAuthClient();
	const router = useRouter();

	const form = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
		validators: {
			onSubmit: loginSchema,
		},
		onSubmit: ({ value }) =>
			toast.promise(
				async () =>
					await signInWithEmailAndPassword(value.email, value.password),
				{
					success: (data) => {
						router.push("/");
						return `Bienvenido ${data.user.name}`;
					},
					error: (error) => {
						return `Error: ${error.message}`;
					},
				},
			),
	});

	return (
		<form
			className="flex w-full max-w-sm flex-col gap-6"
			onSubmit={(event) => {
				event.preventDefault();
				form.handleSubmit();
			}}
		>
			<div className="flex flex-col gap-4">
				<form.Field
					name="email"
					children={(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;

						return (
							<Field>
								<FieldLabel>Email</FieldLabel>
								<FieldContent>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onBlur={field.handleBlur}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="user@email.com"
										type="email"
										required
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</FieldContent>
							</Field>
						);
					}}
				/>
				<form.Field
					name="password"
					children={(field) => {
						const isInvalid =
							field.state.meta.isTouched && !field.state.meta.isValid;

						return (
							<Field>
								<FieldLabel>Password</FieldLabel>
								<FieldContent>
									<Input
										id={field.name}
										name={field.name}
										value={field.state.value}
										onChange={(e) => field.handleChange(e.target.value)}
										placeholder="Digite su contraseña"
										type="password"
										required
									/>
									{isInvalid && <FieldError errors={field.state.meta.errors} />}
								</FieldContent>
							</Field>
						);
					}}
				/>
			</div>
			<div className="flex flex-col gap-3">
				<Button type="submit" className="w-full">
					Login
				</Button>
				<Button type="button" variant="outline" className="w-full">
					Continue with Google
				</Button>
			</div>
		</form>
	);
}
