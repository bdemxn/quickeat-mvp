"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
	return (
		<form className="flex w-full max-w-sm flex-col gap-6">
			<div className="flex flex-col gap-4">
				<Field>
					<FieldLabel>Full Name</FieldLabel>
					<FieldContent>
						<Input type="text" placeholder="Enter your full name" />
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel>Email</FieldLabel>
					<FieldContent>
						<Input type="email" placeholder="Enter your email" />
					</FieldContent>
				</Field>
				<Field>
					<FieldLabel>Password</FieldLabel>
					<FieldContent>
						<Input type="password" placeholder="Enter your password" />
					</FieldContent>
				</Field>
			</div>
			<div className="flex flex-col gap-3">
				<Button type="submit" className="w-full">
					Register
				</Button>
				<Button type="button" variant="outline" className="w-full">
					Continue with Google
				</Button>
			</div>
		</form>
	);
}
